const state = {
    parking_type: [
        { label: "室内", value: 1 },
        { label: "室外", value: 2 },
    ],
    radio_disabled: [
        { label: "禁用", value: false },
        { label: "启用", value: true },
    ],
    year_check: [
        { label: "未年检", value: false },
        { label: "已年检", value: true },
    ],
    radio_gear: [
        { label: "手动", value: 1 },
        { label: "自动", value: 2 },
        { label: "人工智能", value: 3 },
    ],
    energy_type: [
        { label: "电", value: 1 },
        { label: "油", value: 2 },
        { label: "混合动力", value: 3 },
    ]
}

export default {
    namespaced: true,
    state,
};