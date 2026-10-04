class Stack {
    private stack: number[] = [];

    push(value: number): void {
        this.stack.push(value);
    }

    pop(): number | undefined {
        return this.stack.pop();
    }

    peek(): number | undefined {
        return this.stack[this.stack.length - 1];
    }

    display(): void {
        console.log(this.stack);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top:", stack.peek());
console.log("Popped:", stack.pop());

stack.display();
