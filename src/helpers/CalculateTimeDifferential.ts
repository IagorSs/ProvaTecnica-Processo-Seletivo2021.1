import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine):number => {
    /**
     * CALC
     */

    return timeMachine.currentDate.day;
}

export default calculateTimeDifferential;
