class LargeNumberDisplayer {
    private static readonly TRILLION = "T";
    private static readonly BILLION = "B";
    private static readonly MILLION = "M";
    private static readonly THOUSAND = "K";
    private static readonly DOT = ".";
    private static readonly EMPTY = "";
    private static readonly POST_FIX: string[] = [
        "K", "M", "B", "T",
        "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM",
        "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
        "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM",
        "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
        "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM",
        "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
        "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM",
        "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
        "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM",
        "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "EZ"
    ];

    private static resultStr = "";

    public static NumberToString(number: number): string {
        number = Math.floor(number);
        if (number < 1000) {
            return (number).toString();
        }


        let length = 0;
        let LOGE10 = 10;
        let power = 1;
        while (number / Math.pow(LOGE10, power) > 1) {
            power++;
        }
        length = power;

        let groupOfThree = Math.floor((length - 1) / 3);
        let reduced = Math.floor(number / Math.pow(1000, groupOfThree));

        LargeNumberDisplayer.resultStr = "";
        if (length % 3 == 1) {
            LargeNumberDisplayer.resultStr += reduced.toFixed(1);
        } else {
            reduced = Math.round(reduced);
            LargeNumberDisplayer.resultStr += reduced.toString();
        }



        //append postfix
        if (groupOfThree >= LargeNumberDisplayer.POST_FIX.length) {
            groupOfThree = LargeNumberDisplayer.POST_FIX.length - 1;
        }

        LargeNumberDisplayer.resultStr += LargeNumberDisplayer.POST_FIX[groupOfThree - 1];

        return LargeNumberDisplayer.resultStr.toString();

    }
}