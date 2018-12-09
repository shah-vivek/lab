

let currentTokenNumber = 1000;
const TokenNumberGenerator = {
    getTokenNumber: () => {
        return "PS" + (++currentTokenNumber);
    }
};

export default TokenNumberGenerator;

