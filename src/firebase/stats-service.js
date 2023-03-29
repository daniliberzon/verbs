import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import {tensesStats} from "../utils/utils"

export async function addDynamicsStat(date, score, uid) {
    const ref = doc(db, 'dynamicStats', uid);
    const curDoc = await getDoc(ref);
    if (curDoc.exists()) {
        const tempStr = "dynamicStat." + date;
        await updateDoc(ref, {[tempStr]: score});
    }
    else
        await setDoc(ref, {dynamicStat: {[date]: score}});
}

export async function getAllDynamicsStats(uid) {
    const ref = doc(db, 'dynamicStats', uid);
    const curDoc = await getDoc(ref);
    return curDoc.exists() ? curDoc.data() : {dynamicStat: {}}
}

export async function addStatsTable(form, score, uid) {
    const ref = doc(db, 'tensesStats', uid);
    const curDoc = await getDoc(ref);
    if (curDoc.exists()) {
        const tempStr = "tensesStats." + form;
        await updateDoc(ref, {[tempStr]: score});
    }
    else
        await setDoc(ref, {tensesStats: tensesStats});
}

export async function getStatsTable(uid) {
    const ref = doc(db, 'tensesStats', uid);
    const curDoc = await getDoc(ref);
    return curDoc.exists() ? curDoc.data() : {tensesStats: tensesStats}
}