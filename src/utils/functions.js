
export default {
    handleGenerateTimeHours: (seconds) => {
        let date = new Date(seconds * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        return `${hours}:${minutes}`
    }
}