---
title: 'basic distributed communication with MLX'
date: '2025-11-19'
desc: exploring basic MPI communication with MLX
tags: ['distributive computing', 'MLX']
---

```python
import mlx.core as mx

def main():
	world = mx.distributed.init()
	rank = world.rank()
	world_size = world.size()
	print(f"Process {rank + 1}/{world_size} initialized.")
	
if __name__ == "__main__":
	main()
```

we can spin up `n` suprocesses to simulate `n` different devices running in a distributed network (and communicating via MPI) using: `mlx.launch -n 2 python test.py`

```bash
(.venv) ~/ws/git/personal/mlxtron > mlx.launch -n 2 python test.py
Process 1/2 initialized.
Process 2/2 initialized.
```

Now we can try some distributed computation. Lets try summing the individual elements of a list. To do this we need to take the original list and split it into `n` sublists which corresponds to the degree of parallel processes. Then, each worker will sum up the elements of its particular subset of the list and then use the `mx.distributed.all_sum()` function to combine the results for all `n` workers.

```python
import mlx.core as mx

data = [1, 2, 3, 4]

def main():
	world = mx.distributed.init()
	rank = world.rank()
	world_size = world.size()
	print(f"Process {rank + 1}/{world_size} initialized.")

	data_seg_len = len(data)//world_size
	data_rank = data[rank*data_seg_len:(rank + 1)*data_seg_len]
	sum = 0
	for x in data_rank:
		sum += x
	print(f"Process {rank} computed data sum to be {sum}") 

	total_sum = mx.distributed.all_sum(sum)
	print(f"Data sum total = {total_sum}")
	
if __name__ == "__main__":
	main()
```

```bash
(.venv) ~/ws/git/personal/mlxtron > mlx.launch -n 2 python test.py
Process 2/2 initialized.
Process 1 computed data sum to be 7
Data sum total = 10
Process 1/2 initialized.
Process 0 computed data sum to be 3
Data sum total = 10
```

We can see that process 1 computed the sum of the first 2 elements of the list and process 2 computed the sum of the second 2 elements of the list. The MPI distributed operation `all_sum` is a synchronization point, the independent processes must wait for all other processes to finish at that point in the code. As the name implies, the synchronization point is mean to summate all `sum` variables from each process together. We can see that this succeeds as the answer is given as 10.

the output looks like the processes are running sequentially, but in reality this is due to **python output buffering** to improve performance of print statements. We can add `flush=True` to each print statement to force the interpreter to flush the text to the terminal immediately.

```bash
(.venv) ~/ws/git/personal/mlxtron > mlx.launch -n 2 python test.py
Process 1/2 initialized.
Process 0 computed data sum to be 3
Process 2/2 initialized.
Process 1 computed data sum to be 7
Data sum total = 10
Data sum total = 10
```