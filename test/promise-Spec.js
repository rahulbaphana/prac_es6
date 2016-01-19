describe("Promise", () => {
    it("should execute the callback given to then", (done) => {
        var promise = new Promise((resolve, reject) => {
            resolve();
        });

        promise.then(() => {
            done();
        });
    });

    it("should execute the callback given to then", (done) => {
        var promise = new Promise((resolve, reject) => {
            resolve(1);
        });

        promise.then((data) => {
            expect(data).toBe(1);
            done();
        });
    });

    it("should fail when rejected", (done) => {
        var promise = new Promise((resolve, reject) => {
            reject(Error("Oh noes!!"));
        });

        promise.then(() => {
            //on success
            fail("Shouldn't be successful!!");
            done();
        }, (error) => {
            expect(error.message).toBe("Oh noes!!");
            done();
        });
    });

    it("should compose when resolved with a promise", (done) => {
        var previousPromise = new Promise((resolve, reject) => {
            resolve(3);
        });

        var promise = new Promise((resolve, reject) => {
            resolve(previousPromise);
        });

        promise.then((data) => {
            expect(data).toBe(3);
            done();
        });
    });

    it("it should have a static resolve", (done) => {
        var previousPromise = Promise.resolve(3);

        var promise = Promise.resolve(previousPromise);

        promise.then((data) => {
            expect(data).toBe(3);
            done();
        });
    });

    it("should be asynchronous", (done) => {
        var sync = false;

        var promise = new Promise((resolve, reject) => {
            resolve();
        });

        promise.then(() => {
            expect(sync).toBe(true);
            done();
        });

        sync = true;
    });
});