
function* numbers() {
  let file = new FileReader("./numbers.txt");
  try {
    while(!file.eof) {
      yield parseInt(file.readLine(), 10);
    }
  } finally {
    file.close();
  }
}


let a = numbers() 
a.next()
