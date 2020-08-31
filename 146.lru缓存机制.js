/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */


// @lc code=start
/**
 * @param {number} capacity
 */

class CacheNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.cache = {};
    this.dummyHead = new CacheNode();
    this.dummyTail = new CacheNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.cache[key];
    if (typeof node === 'undefined') {
        return -1;
    }
    this.moveToHead(node);
    return node.value;
};

LRUCache.prototype.moveToHead = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = this.dummyHead.next;
    node.prev = this.dummyHead;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache[key];
    if (typeof node !== 'undefined') {
        this.moveToHead(node);
        node.value = value;
    }
    else {
        node = new CacheNode(key, value);
        this.cache[key] = node;
        this.dummyHead.next.prev = node;
        node.next = this.dummyHead.next;
        node.prev = this.dummyHead;
        this.dummyHead.next = node;
    
        this.count++;
        if (this.count > this.capacity) {
            let tail = this.dummyTail.prev;
            tail.prev.next = this.dummyTail;
            this.dummyTail.prev = tail.prev;
    
            delete this.cache[tail.key];
            this.count--;
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

