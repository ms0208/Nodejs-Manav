const a = require('fs');
const b = require('fs');
a.writeFileSync("Hello.txt","My name is Manav");
b.writeFileSync("Hello.cpp","#include <iostream>int main() { std::cout << Hello World!; return 0;}")
const c = require('fs').writeFileSync;
c("Manav.txt","Make file with another method")