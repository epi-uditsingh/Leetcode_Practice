// Two sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  const numMap = {}; // hashmap to store number and its indices
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // check if complement exists in the hashmap
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    // store the current number and its index in the hashmap
    numMap[nums[i]] = i;
    console.log(numMap);
  }
  return [];
}

function twoSum2(nums, target) {
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i]
    }
    numMap[nums[i]] = i;
  }
  return [];
}

// Test the function
const nums = [2, 7, 11, 15];
const target = 17;
// console.log(twoSum2(nums, target)); // Output: [0, 1]
//-------------------------------------------------------


//Problem Statement:
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

function reverseInteger(num) {
  let reversed = 0;
  while (num !== 0) {
    const pop = num % 10;
    num = Math.trunc(num / 10);
    if (reversed > Math.floor((Math.pow(2, 31) - 1) / 10) ||
      reversed < Math.floor(-Math.pow(2, 31) / 10)) {
      return 0;
    }
    reversed = reversed * 10 + pop
  }
  return reversed;
}

function reverseInteger2(num) {
  let reversed = 0;
  while (num !== 0) {
    const pop = num % 10;
    num = Math.trunc(num / 10);
    reversed = reversed * 10 + pop;
  }
  return reversed
}

// console.log(reverseInteger2(2345))
//-------------------------------------------------------

// Problem Statement:
// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.


function isValid(s) {
  const stock = [];
  const mapFn = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stock.push(char);
    }
    else {
      const top = stock.pop();
      if (mapFn[char] !== top) {
        return false;
      }
    }
  }
  return stock.length === 0;
}

function isValid2(s) {
  const stock = [];
  const mapFn = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  for (let char of s) {
    if (char === "(" || char === "{" || char == "[") {
      stock.push(char);
    }
    else {
      const top = stock.pop();
      if (mapFn[char] !== top) {
        return false;
      }
    }
  }
  return stock.length === 0
}

// console.log(isValid2(s = "()[]{}"))

//-------------------------------------------------------

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.


function ListNode(val = 0, next = null) {
  this.val = (val)
  this.next = (next)
}

class ListNode2 {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    }
    else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

function mergeTwoSortedLists(headA, headB) {
  // write code here
  let dummy = new ListNode2();
  let current = dummy;
  while (headA !== null && headB !== null) {
    if (headA.val < headB.val) {
      current.next = headA;
      headA = headA.next;
    }
    else {
      current.next = headB;
      headB = headB.next;
    }
    current = current.next;
  }
  if (headA !== null) {
    current.next = headA;
  }
  if (headB !== null) {
    current.next = headB;
  }
  return dummy.next;
}


const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// let mergedList = mergeTwoSortedLists(l1, l2);
// let result = "";
// while (mergedList !== null) {
//   result += mergedList.val + " ";
//   mergedList = mergedList.next;
// }
// console.log(result.trim());
//-------------------------------------------------------


// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If any elements are remaining in arr1, append them
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If any elements are remaining in arr2, append them
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

function mergeTwoSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    }
    else {
      sortedArray.push(arr1[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[i]);
    j++;
  }
  return sortedArray
}

// Example usage:
// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//-------------------------------------------------------


// Binary search
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] < target) {
      low = mid + 1; // continue searching in the right half
    }
    else {
      high = mid - 1 // contunue searching in the left half
    }
  }
  return -1;
}

function binarySearch2(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] > target) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}

// Example usage:
const arr = [2, 5, 8, 12, 16, 23, 38, 45, 72, 91];
const targetBi = 23;

// const result = binarySearch(arr, targetBi);
// console.log(result);

//-------------------------------------------------------

// Find the Median of Two Sorted Arrays
// Problem Statement:
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const x = nums1.length;
  const y = nums2.length;

  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = (low + high) >> 1;  // Equivalent to Math.floor((low + high) / 2)
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minX = (partitionX === x) ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minY = (partitionY === y) ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

// Test the function
// console.log(findMedianSortedArrays([1, 3], [2]));     
// console.log(findMedianSortedArrays([1, 2], [3, 4]));  

//-------------------------------------------------------

// Longest Substring Without Repeating Characters
// Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.
// abca

// Using sliding window approach to find the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    console.log(currentChar, charMap, end)
    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
      console.log("Start: ", start)
    }
    charMap[currentChar] = end;
    console.log(charMap)
    maxLength = Math.max(maxLength, end - start + 1);
    console.log("Maxlength: ", maxLength);
    console.log("-------------------------------------")
  }
  return maxLength
}

// console.log(lengthOfLongestSubstring("abcabcbb"))

//-------------------------------------------------------

// Palindrome Number

// Question: Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome, but 123 is not.

// Example 1:
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;
  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  return original === reversed;
}

// console.log(isPalindrome(121))

//-------------------------------------------------------

// Maximum Subarray
// Problem Statement:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

function maxSubArray2(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]))
//-------------------------------------------------------

// Merged intervals
// Problem Statement:
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]


function merge(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  // Sort the intervals based on their starting time.
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMergedInterval = merged[merged.length - 1]
    console.log("Last merged Interval: ", lastMergedInterval);
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge intervals
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    }
    else {
      // Add the current interval to the merged array.
      merged.push(currentInterval)
    }
  }
  return merged;
}

function mergeIntervals(intervals) {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] = b[0]);

}

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

// Reverse linked list

// Problem Statement:
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current
    current = nextNode;
  }
  return prev;
}

function reverseLinkedList2(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}


// Bubble sort:
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
// const array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", array);
// const sortedArray = bubbleSort(array.slice()); // create a copy before sorting
// console.log("Sorted array:", sortedArray);


// Merge Sort:

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function mergeSort2(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the two sorted halve;
  return merge2(sortedLeft, sortedRight);
}

function merge2(left, right) {
  let result = [];
  let leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two sorted arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append remaining elements from left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



// // Example usage:
// const array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", array);
// const sortedArray = mergeSort(array.slice()); // create a copy before sorting
// console.log("Sorted array using Merge Sort:", sortedArray);










