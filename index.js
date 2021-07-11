const progBar = document.getElementById("progBar");
const usedStorageText = document.getElementById("usedStorage");
const remainingStorage = document.getElementById("remainingStorageNum");
const totalStorageText = document.getElementById("totalStorage");

const usedStorageArr = usedStorageText.innerHTML.split(" ");
const usedStorage = parseInt(usedStorageArr[0]);

const totalStorageArr = totalStorageText.innerHTML.split(" ");
const totalStorage = parseInt(totalStorageArr[0]);

// when used storage change the remaining storage and progress bar changes
const changeValues = () => {
	outputRemainingStorage = totalStorage - usedStorage;
	remainingStorage.innerHTML = outputRemainingStorage;
	progBar.style.width = `${usedStorage / 10}%`;
};

setTimeout(changeValues, 10);
