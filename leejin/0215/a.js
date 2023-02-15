function findSmallestElement(arr) {
	if (arr.length === 0) {
		return 0; //빈 배열이면 0을 리턴
	} else {
		let min = arr[0];
		// 변수 min에 배열의 아무 값을 임의로 설정. (가상의 최솟값)
		for (i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}
}

findSmallestElement([2000000, 30, 5, 7, 200, 1, 0, 9]);
