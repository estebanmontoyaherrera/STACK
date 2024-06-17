"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    // Apilar un elemento
    push(element) {
        this.items.push(element);
    }
    // Desapilar un elemento
    pop() {
        return this.items.pop();
    }
    // Ver el elemento superior
    peek() {
        return this.items[this.items.length - 1];
    }
    // Verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }
    // Obtener el tamaño de la pila
    size() {
        return this.items.length;
    }
    // Limpiar la pila
    clear() {
        this.items = [];
    }
    // Mostrar todos los elementos en la pila
    print() {
        console.log(this.items.join(', '));
    }
}
// Crear una instancia de la pila
const stack = new Stack();
// Agregar elementos a la pila usando un ciclo for
for (let i = 1; i <= 5; i++) {
    stack.push(i);
    console.log(`Elemento ${i} apilado:`);
    stack.print();
}
// Mostrar la pila después de agregar los elementos
console.log("Pila después de apilar elementos:");
stack.print();
// Desapilar todos los elementos usando un ciclo for
console.log("Desapilando elementos:");
while (!stack.isEmpty()) {
    console.log(`Elemento desapilado: ${stack.pop()}`);
    stack.print();
}
// Verificar la pila después de desapilar todos los elementos
console.log("Pila después de desapilar todos los elementos:");
stack.print();
