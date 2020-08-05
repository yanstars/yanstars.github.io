let arr = [5, 8, 4, 2, 3, 9];

/**
 *  冒泡排序
 *  稳定
 *  时间复杂度为O(n^2)
 *  空间复杂度为O(1)
 *
 *  1、第一轮，当前元素和下一个元素比较，一轮后最大值移到最后一位
 *  2、走n-1轮
 */
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        //走n-1轮
        for (let j = 0; j < this.length - 1 - i; j++) {
            //每走完一次，把第k大推到最后
            if (this[j] > this[j + 1]) {
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};

/**
 *  选择排序
 *  不稳定
 *  时间复杂度为O(n^2)
 *  空间复杂度为O(1)
 *
 *  1、第一轮，当前最小值和当前值进行比较，找到最小值的位置，一轮后将最小值放在第一位
 *  2、走n-1轮
 */

Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length; i++) {
        //走n-1轮
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            //第一轮找到最小值并将其放在第一位
            if (this[indexMin] > this[j]) {
                indexMin = j;
            }
        }
        if (indexMin != i) {
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }
};

/**
 *  插入排序
 *  稳定
 *  时间复杂度为O(n^2)
 *  空间复杂度为O(1)
 *
 *  1、从第二个元素开始，跟他前面的数字比较。它前面一定是排好的
 *  2、进行n-1轮
 */
Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        for (let j = i; j > 0; j--) {
            //往前面找到合适的位置
            if (this[j] < this[j - 1]) {
                const temp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = temp;
            } else {
                break;
            }
        }
    }
};

/**
 * 归并排序
 * 稳定
 * 总时间复杂度为O(n*logn)
 * 1、分：将数组分成两半，再递归的对子数组进行“分”的操作，直到分成一个个单独的数字。时间复杂度为O(logn)
 * 2、合：把两个数字合并成有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组。时间复杂度为O(n)
 *
 * 算法步骤：
 * 1、新建一个新数组res，用于存放最终排序后的数组
 * 2、比较两个有序数组的头部，较小者出队并推入res中
 * 3、如果数组还有值，重复第二步
 */
Array.prototype.mergeSort = function () {
    const rec = function (arr) {
        if (arr.length == 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);

        let orderLeft = rec(left);
        let orderRight = rec(right);
        let res = [];

        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift());
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else {
                res.push(orderRight.shift());
            }
        }
        return res;
    };
    const res = rec(this);
    return res.forEach((n, i) => {
        this[i] = n;
    });
};
