let square = function () {
    let matrix = [
        ['R', 'R', 'W'],
        ['G', 'C', 'W'],
        ['G', 'B', 'B'],
    ]
    //갱신내용 반영
    let updater = {
        updateRow: function (row, newLine) {
            for (let i = 0; i < 3; i++) {
                matrix[row][i] = newLine[i];
            }
        },
        updateCol: function (col, newLine) {
            for (let i = 0; i < 3; i++) {
                matrix[i][col] = newLine[i];
            }
        }
    }
    //줄 선택
    let extractor = {
        getRowAt: function (base) {
            let ret = []
            for (let i = 0; i < 3; i++) {
                ret.push(matrix[base][i]);
            }
            return ret;
        },
        getColAt: function (base) {
            let ret = []
            for (let i = 0; i < 3; i++) {
                ret.push(matrix[i][base])
            }
            return ret;
        }
    }
  
    return {
        pushUp: function (col) {
            let oldLine = extractor.getColAt(col);
            let first = oldLine[0];
            let rest = oldLine.slice(1, 3);
            let newLine = [...rest, first];
            updater.updateCol(col, newLine);
        },
        pushDown: function (col) {
            let oldLine = extractor.getColAt(col);
            let first = oldLine.slice(1, 3);
            let rest = oldLine[0];
            let newLine = [first, ...rest];
            updater.updateCol(col, newLine);
  
        },
        pushLeft: function (row) {
            let oldLine = extractor.getRowAt(row);
            let first = oldLine[0];
            let rest = oldLine.slice(1, 3);
            let newLine = [...rest, first];
            updater.updateRow(row, newLine);
        },
        pushRight: function (row) {
            let oldLine = extractor.getRowAt(row);
            let first = oldLine.slice(1, 3);
            let rest = oldLine[0];
            let newLine = [first, ...rest];
            updater.updateRow(row, newLine);
  
        },
        print: function () {
            for (let i = 0; i < 3; i++) {
                let line = '';
                for (let j = 0; j < 3; j++) {
                    line += matrix[i][j]
                }
                console.log(line)
            }
        }
    }
  }()
  
  // 입력값 분리
  let spliter = function (word) {
    let idx = 0;
    let ans = [];
    while (idx < word.length) {
        if (word[idx + 1] != "'") {
            ans.push(word[idx]);
            idx += 1;
        }
        else {
            ans.push(word.substr(idx, 2));
            idx += 2;
        }
    }
    return ans;
  }
  
  // 메인
  let readline = require("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.setPrompt('CUBE>')
  square.print()
  rl.prompt()
  
  rl.on("line", function (line) {
    let liSplit = spliter(line);
  
    for (let i = 0; i < liSplit.length; i++) {
        switch (liSplit[i]) {
            case "U":
                console.log("U");
                square.pushLeft(0);
                square.print();
                continue;
  
            case "U'":
  
                console.log("U'");
                square.pushRight(0);
                square.print();
                continue;
  
            case "B":
                console.log("B");
                square.pushRight(2);
                square.print();
                continue;
  
            case "B'":
                console.log("B'");
                square.pushLeft(2);
                square.print();
                continue;
  
            case "R":
                console.log("R");
                square.pushUp(2);
                square.print();
                continue;
  
            case "R'":
                console.log("R'");
                square.pushDown(2);
                square.print();
                continue;
  
            case "L":
                console.log("L");
                square.pushDown(0);
                square.print();
                continue;
  
            case "L'":
                console.log("L'")
                square.pushUp(0);
                square.print();
                continue;
  
            case "Q":
                console.log("Bye~");
                rl.close();
        }
    }
  
    rl.prompt();
  })
  
  rl.on("close", function (line) {
    process.exit();
  });