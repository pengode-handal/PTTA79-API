const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//fungsi random untuk unique code
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Membuat dan memasukkan data ke dalam database
const createData = async (nama, email) => {
    //deklarasi db
    const response = await prisma.kakel.create({
        data: {
            name: nama,
            email: email,
            //mengisi code dengan angka random
            code: rand(0, 9999).toString(),
        },
    });
    return response;
};

// Cari item berdasarkan kode tertentu
async function checkItem(code, category = null) {
    const item = await prisma.kakel.findUnique({
        where: {
            code: code,
        },
    });
    let listCategory = [
        "isExpKonsumAppt",
        "isExpKonsumMain",
        "isExpKonsumDessert",
        "isExpSouvenir",
    ];
    // Jika item ditemukan dan isExp masih false, lakukan hal ini
    if (item) {
        const expired = (data, category) => {
            if (data[category] === false) {
                return "Bisa ditukar";
            } else {
                return "Udah dituker";
            }
        };
        if (category) {
            if (!item[category]) {
                return {
                    error: "Category not found",
                    availableCategory: [
                        "isExpKonsumAppt",
                        "isExpKonsumMain",
                        "isExpKonsumDessert",
                        "isExpSouvenir",
                    ],
                };
            } else {
                if (item[category] === false) {
                    return {
                        message: "Bisa Ditukar",
                        expired: false,
                    };
                } else {
                    return {
                        message: "TIDAK bisa Ditukar",
                        expired: true,
                    };
                }
            }
        } else {
            return {
                Souvenir: expired(item, listCategory[3]),
                Appetizer: expired(item, listCategory[0]),
                MainCouse: expired(item, listCategory[1]),
                Dessert: expired(item, listCategory[2]),
                data: item,
            };
        }
    } else {
        return {
            message: "Data Tidak Ditemukan",
        };
    }
}

async function checkItemByEmail(email, category = null) {
    const item = await prisma.kakel.findMany({
        where: {
            email: {
                equals: email,
                mode: "insensitive",
            },
        },
    });
    let listCategory = [
        "isExpKonsumAppt",
        "isExpKonsumMain",
        "isExpKonsumDessert",
        "isExpSouvenir",
    ];
    // Jika item ditemukan dan isExp masih false, lakukan hal ini
    if (item) {
        const expired = (data, category) => {
            if (data[category] === false) {
                return "Bisa ditukar";
            } else {
                return "Udah dituker";
            }
        };
        if (category) {
            if (!item[category]) {
                return {
                    error: "Category not found",
                    availableCategory: [
                        "isExpKonsumAppt",
                        "isExpKonsumMain",
                        "isExpKonsumDessert",
                        "isExpSouvenir",
                    ],
                };
            } else {
                if (item[category] === false) {
                    return {
                        message: "Bisa Ditukar",
                        expired: false,
                    };
                } else {
                    return {
                        message: "TIDAK bisa Ditukar",
                        expired: true,
                    };
                }
            }
        } else {
            return {
                Souvenir: expired(item, listCategory[3]),
                Appetizer: expired(item, listCategory[0]),
                MainCouse: expired(item, listCategory[1]),
                Dessert: expired(item, listCategory[2]),
                data: item,
            };
        }
    } else {
        return {
            message: "Data Tidak Ditemukan",
        };
    }
}

//Update database dengan memasukkan unique code lalu mengubah value dari isExp menjadi true atau false
// ################# BERDASARKAN KODE #################
const updateData = async (key, code, trufal = true) => {
    await prisma.kakel.update({
        where: {
            code: code,
        },
        data: {
            [key]: trufal,
        },
    });
    return {
        message: "Successfully updated",
        data: await checkItem(code),
    };
};

// ################# BERDASARKAN KODE #################
const updateDataByEmail = async (key, email, trufal = true) => {
    await prisma.kakel.update({
        where: {
            email: email,
        },
        data: {
            [key]: trufal,
        },
    });
    return {
        message: "Successfully updated",
        data: await checkItemByEmail(email),
    };
};
// Menghapus item berdasarkan code
const deleteItem = async (code) => {
    if (!code) return { message: "Isi dulu" };
    await prisma.kakel.delete({
        where: {
            code: code,
        },
    });
    return { message: "Succesfully deleted" };
};

// Ambil semua items
const getAllItems = async () => {
    return await prisma.kakel.findMany();
};

// Ambil semua item tapi di filter (keluarnya array)
const getSelectedItems = async (key) => {
    return await prisma.kakel.findMany({
        select: { [key]: true },
    });
};

//  Export module biar bisa di pake di beda file
module.exports = {
    createData,
    checkItem,
    updateData,
    deleteItem,
    rand,
    getAllItems,
    getSelectedItems,
    checkItemByEmail,
    updateDataByEmail,
};
