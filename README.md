# Challenge 2

## coderbyte chalenge 2
Create a program in Node.js where the input defined in input.csv is parsed and organized into the content shown in output.json. (see examples on section Examples)

## Requirements
1. Write your program in only one file (like index.js) and write the output to a file (output.json) instead of printing it to logs or on the screen.

2. JSON order is not important, but its content is. The program should output the same content (not necessarily the same order) if column order is changed.

3. Don't hard code the tags shown, meaning tags could be changed to "email Responsible Parent Pedagogical Financial" and it should still parse accordingly.  


## Examples
Here are two examples of inputs and the outputs your code should generate for each one:

### Example 1
- [input.csv](https://gist.githubusercontent.com/lucas-brito/a38fbf18aa9811ebd544959f0d657a30/raw/6ad090aeb302c2ba4b8a0dc2c7dc373af17d9346/input.csv)  
- [output.json](https://gist.githubusercontent.com/lucas-brito/a38fbf18aa9811ebd544959f0d657a30/raw/6ad090aeb302c2ba4b8a0dc2c7dc373af17d9346/output.json)

### Example 2
 - [input1.csv](https://gist.githubusercontent.com/lucas-brito/a38fbf18aa9811ebd544959f0d657a30/raw/dc929e2f9c8830149c7b443a26036a98133554c0/input1.csv)  
 - [output1.json]( https://gist.githubusercontent.com/lucas-brito/a38fbf18aa9811ebd544959f0d657a30/raw/dc929e2f9c8830149c7b443a26036a98133554c0/output1.json)

## Tips
1. Some libraries that may be useful, but not required:

    - Lib Lodash 
    - google-libphonenumber

2. Code considering all your files are on the same directory, like below:


        ├── challenge/   
        ├  ├── index.js   
        ├  ├── input.csv   
        ├  ├── output.json

3. Using a package.json file for this test is not mandatory but it is a good practice, if you don't, consider providing the exact versions of node and any other lib used in some other way

# Future Features

## Data and Insertion
At the moment the data is being stored in a one-dimensional array, but in the future it may be replaced by a tree with sorted insertions.

## Find duplicate elements
To find duplicate elements the current resolution is doing a blind search in the matrix, which is something unfeasible in view of large amounts of data.

This problem requires implementing a binary search to make the algorithm perform better as a whole.