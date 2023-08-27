  export const convertToTime = (totalSeconds: number) => {
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const secondsString = seconds > 9 ? seconds : `0${seconds}`;
    const minutesString = minutes > 9 ? minutes : `0${minutes}`;
    return `${minutesString}:${secondsString}`;
  };