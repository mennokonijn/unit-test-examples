/**
 * Fortune teller answering what an oracle friend of hers answers, or nothing.
 */
class FortuneTellerDupDup {
    /**
     * Constructor.
     * @param {Oracle} oracle - The oracle object.
     */
    constructor( oracle ) {
        this.oracle = oracle;
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer2( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer3( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer4( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer5( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }

    /**
     * Return the answer to life, universe and everything; in case you spend enough money, that is.
     * @param {number} [money=0] - Money spent for getting an answer.
     * @return {string} An answer.
     */
    answer6( money = 0 ) {

        if (money >= 5) {
            return this.oracle.answer();
        } else {
            return '';
        }
    }
}

export default FortuneTellerDupDup;
