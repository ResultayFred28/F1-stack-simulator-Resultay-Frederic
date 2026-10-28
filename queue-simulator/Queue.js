class Queue {
    constructor() {
        this.items = []
        this.head = 0
        this.tail = 0
         
    }

    // Add element to top of stack
    enQueue(element) {
        this.items[this.tail] = element
        let push_res=`${element}`;
        
        let currentIndex = this.tail;
        this.tail += 1
        //return [push_res,count];
        console.log(push_res);
        return [push_res, currentIndex];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    dequeue() {
        if(this.isEmpty()) return undefined
        let deleteItem = this.items[this.head]
        this.head += 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        if(this.isEmpty()) return undefined
        console.log(`front element is ${this.items[this.head]}`)
        return this.items[this.head]
    }

    // Check if stack is empty
    isEmpty() {
        let empty = this.tail - this.head === 0
        console.log(empty ? 'Queue is empty' : 'Queue is NOT empty')
        return empty
    }

    // Check size of stack
    size() {
        let currentSize = this.tail
        console.log(`${currentSize} elements in Queue`)
        return currentSize
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = this.head; i < this.tail; i++) {
            str += this.items[i] + ' '
        }
        return str.trim();
    }

    // Clear stack
    clear() {
        this.items = []
        this.head = 0
        this.tail = 0
        console.log('Queue cleared...')
        return this.items
    }
}

const queue = new Queue()

$(document).ready(function() {
    $("#push-btn").on("click",function(){
        let push_data = queue.enQueue($("#st-data").val());
        $("#queue").append(`<div id="st${push_data[0]}"class="row bg-primary push">${push_data}</div>`);
    });
    $("#pop-btn").on("click",function(){
        let pop_data = queue.dequeue();
        $("#dequeue").append(`<div class="row pop text-bg-danger border border-light">${pop_data}</div>`);
        $(`#st${pop_data}`).remove();
    });
    $("#peek-btn").on("click",function(){
        let peek_data = queue.peek();
        $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
        setTimeout(function() {
            $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");
        },1000);
    });
    $("#clear-btn").on("click",function(){
        queue.clear();
        $("#queue, #dequeue").empty();
    });
});

