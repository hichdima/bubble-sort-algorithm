const arr = [3,2,4,6,5,1,1,1,0,-2];

const bubbleSort = (arr) => {
    let currElement, nextElement;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            currElement = arr[i];
            nextElement = arr[i + 1];

            if (nextElement < currElement) {
                arr[i] = nextElement;
                arr[i + 1] = currElement;
                sorted = false; // if we had to swap elements, means array is not sorted
            }
        }
    }
}

bubbleSort(arr);

console.log(arr);