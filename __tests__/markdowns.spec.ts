import { read } from "../scripts/docs/src";

jest.setTimeout(1000000);

describe("ts interface parse", () => {
    it('read', async () => {
        const entry = `${process.cwd()}/src`;
        await read(entry,1);
    })
});
    