import PRESENT_PAAL_SHLEMIM from "../img/present-paal-shlemim.svg";
import PRESENT_PAAL_AYN_GRONIYOT from "../img/present-paal-ayn-groniyot.svg";

const SHLEMIM = "shlemim";
const SHLEMIM_EFOL = "shlemim EF'OL";
const SHLEMIM_EFAL = "shlemim EF'AL";
const FOUR_LETTERS = "4 letters";
const PEI_GRONIYOT = `1st groniyot`;
const PEI_NUN = `פ"נ`;
const PEI_IUD = `פ"י`;
const PEI_IUD_HEI_NUN = `פ"י, פ"ה, פ"נ`;
const AYN_GRONIYOT = `2nd groniyot`;
const AYN_VAV_IUD = `ע"ו, ע"י`;
const AYN_IUD = `ע"י`;
const LAMED_HEI = `ל"ה`;
const LAMED_HET_AYN = `ל"ח, ל"ע`;
const LAMED_GRONIYOT = `3rd groniyot`;

export const menuStructure = {
    Present: {
        "PA'AL": [SHLEMIM, AYN_GRONIYOT, AYN_VAV_IUD, LAMED_HEI, LAMED_HET_AYN],
        "PI'EL": [SHLEMIM, FOUR_LETTERS, AYN_GRONIYOT, LAMED_HEI],
        "HIF'IL": [SHLEMIM, PEI_GRONIYOT, PEI_NUN, AYN_IUD],
        "HITPA'EL": [SHLEMIM, AYN_GRONIYOT, LAMED_HEI],
        "NIF'AL": [SHLEMIM, PEI_GRONIYOT, LAMED_HET_AYN]
    },
    Past: {
        "PA'AL": [SHLEMIM, AYN_GRONIYOT, AYN_VAV_IUD, LAMED_HEI, LAMED_HET_AYN],
        "PI'EL": [SHLEMIM, FOUR_LETTERS, AYN_GRONIYOT, LAMED_HEI],
        "HIF'IL": [SHLEMIM, PEI_GRONIYOT, PEI_NUN, AYN_IUD],
        "HITPA'EL": [SHLEMIM, AYN_GRONIYOT, LAMED_HEI],
        "NIF'AL": [SHLEMIM, PEI_GRONIYOT, LAMED_HET_AYN]
    },
    Future: {
        "PA'AL": [SHLEMIM_EFOL, PEI_GRONIYOT, PEI_IUD, SHLEMIM_EFAL, AYN_VAV_IUD, LAMED_HEI],
        "PI'EL": [SHLEMIM, FOUR_LETTERS, LAMED_HEI],
        "HIF'IL": [SHLEMIM, PEI_GRONIYOT, PEI_NUN, AYN_IUD],
        "HITPA'EL": [SHLEMIM, AYN_GRONIYOT, LAMED_HEI],
        "NIF'AL": [SHLEMIM, PEI_GRONIYOT, LAMED_HET_AYN]
    },
    Imperative: {
        "PA'AL": [SHLEMIM_EFOL, PEI_GRONIYOT, PEI_IUD_HEI_NUN, PEI_GRONIYOT, AYN_VAV_IUD, LAMED_HEI, LAMED_GRONIYOT],
        "PI'EL": [SHLEMIM, FOUR_LETTERS, LAMED_HEI],
        "HIF'IL": [SHLEMIM, PEI_GRONIYOT, PEI_NUN, AYN_IUD],
        "HITPA'EL": [SHLEMIM, AYN_GRONIYOT, LAMED_HEI],
        "NIF'AL": [SHLEMIM, PEI_GRONIYOT, LAMED_HET_AYN]
    }
}

export const pics = [PRESENT_PAAL_SHLEMIM, PRESENT_PAAL_AYN_GRONIYOT];

// export const tensesForms = {'Past': PAST,'Present':PRESENT, 'Future':FUTURE, 'Imperative':IMPERATIVE}
// export const tenses = ['Past','Present', 'Future', 'Imperative']
// export const binyanim = ["PA'AL", "PI'EL", "HIF'IL", "HITPA'EL", "NIF'AL"]