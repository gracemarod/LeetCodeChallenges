import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        n = len(nums)
        heapList = []
        for num in nums:
            heapq.heappush(heapList,num)
        
        for j in range(n - k):
            heapq.heappop(heapList)
            
        return heapList[0]