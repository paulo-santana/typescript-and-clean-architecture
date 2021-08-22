import * as local_load_purchases from "@/data/usecases/load-purchases/local-load-purchases"

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new Date("01-01-2030")
        inst2 = new local_load_purchases.LocalLoadPurchases({ fetch: () => "commit d3f6bf9bcee016096098e88aced2d5afdc68c424\r\nAuthor: Edna Rice <Shanie.Pagac@yahoo.com>\r\nDate: Wed Jul 28 2021 22:05:49 GMT+0200 (Central European Summer Time)\r\n\r\n    bypass cross-platform hard drive\r\n", delete: () => undefined, insert: () => undefined, replace: () => undefined }, inst)
    })

    test("0", async () => {
        let inst3: any = new Date("01-01-2020")
        let inst4: any = new Date("01-01-2030")
        let inst5: any = new Date("01-01-2030")
        let inst6: any = new Date("32-01-2020")
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", date: inst3, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst4, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst5, value: 0 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", date: inst6, value: 0 }]
        await inst2.save(param1)
    })

    test("1", async () => {
        let inst3: any = new Date("01-01-2030")
        let inst4: any = new Date("01-01-2030")
        let inst5: any = new Date("01-01-2020")
        let inst6: any = new Date("01-01-2030")
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst3, value: 1 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst4, value: 100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", date: inst5, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst6, value: 0 }]
        await inst2.save(param1)
    })

    test("2", async () => {
        let inst3: any = new Date("01-01-2030")
        let inst4: any = new Date("01-13-2020")
        let inst5: any = new Date("01-01-2020")
        let inst6: any = new Date("01-01-2030")
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", date: inst3, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst4, value: 100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", date: inst5, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst6, value: -100 }]
        await inst2.save(param1)
    })

    test("3", async () => {
        let inst3: any = new Date("01-13-2020")
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", date: inst3, value: 0 }]
        await inst2.save(param1)
    })

    test("4", async () => {
        let inst3: any = new Date("01-01-2030")
        let inst4: any = new Date("01-01-2030")
        let inst5: any = new Date("01-13-2020")
        let inst6: any = new Date("01-01-2030")
        let inst7: any = new Date("32-01-2020")
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", date: inst3, value: 1 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst4, value: 100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", date: inst5, value: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", date: inst6, value: 1 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", date: inst7, value: 1 }]
        await inst2.save(param1)
    })

    test("5", async () => {
        await inst2.save([])
    })
})
