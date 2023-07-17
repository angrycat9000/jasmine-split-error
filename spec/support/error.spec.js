const { UnprocessableEntityError } = require("restify-errors")

it("fails to parse error", () => {
    throw new UnprocessableEntityError();
})