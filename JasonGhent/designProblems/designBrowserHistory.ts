class ListNode {
    url: string
    next: any
    prev: any
    constructor(url: string, next= null, prev = null) {
        this.url = url
        this.next = next
        this.prev = prev
    }
}
class BrowserHistory {
    curr: ListNode
    constructor(homepage: string) {
        this.curr = new ListNode(homepage)
    }
    visit(url: string) {
        const temp = new ListNode(url)
        this.curr.next = temp
        temp.prev = this.curr
        this.curr = this.curr.next
    }
    back(steps: number) {
        while(this.curr.prev != null && steps--) {
            this.curr = this.curr.prev
        }
        return this.curr.url
    }
    forward(steps: number) {
        while (this.curr.next != null && steps--) {
            this.curr = this.curr.next
        }
        return this.curr.url
    }
};


const test: any = new BrowserHistory('leetcode')
test.visit('google')
test.visit('facebook')
test.visit('youtube')
console.log(test.curr)

test.back(1)
test.back(1)
console.log(test.curr)

test.visit('LinkedIn')
console.log(test.curr)