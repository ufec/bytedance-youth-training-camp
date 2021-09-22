(async () => {
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('kkb', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    })

    const Fruit = sequelize.define("Fruit", {
        name: { type: Sequelize.STRING(0), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 },
    });

    let ret = await Fruit.sync();
    ret = await Fruit.create({
        name: "苹果",
        price: 10.2,
        stock: 100
    });
})()