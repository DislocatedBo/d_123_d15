/*https://bookstore.demoqa.com/swagger/
Напишите API тесты на следующие апи ручки (api endpoints)

Авторизация
Удаление пользователя
Получение информации о пользователе
При написании АПИ-тестов обязательно использовать контроллеры, так же вынести в конфиг данные для авторизации, базовый УРЛ.
Будет плюсом, если так же вы отрефакторите тесты написанные в рамках ДЗ АПИ тесты:

*/

/* eslint-disable */
import supertest from "supertest"
import config from "../config"
import user from "./helper/user"
import books from "./helper/books"

describe('user', () => {

    //Успешная генерация токена
    it('Token successfully generated', async () => {
        const response = await user.getToken()
        expect(response.status).toBe(200)
        expect(response.body.token).toBeDefined()
        expect(response.body.expires).toBeDefined()
        expect(response.body.status).toBe('Success')
        expect(response.body.result).toBe('User authorized successfully.')
    })

    //Успешное получение информации о пользователе
    it('getUser', async () => {
        await user.getAuthToken()
        const response = await user.getUser(config.userID)
        expect(response.status).toBe(200)
        expect(data.userID).toBeDefined()
        expect(data.username).toBe('Tname2')
        expect(data.books).toEqual([])
    })

    //Успешное удаление пользователя
    it('deleteUser', async () => {
        const response = await user.deleteUser(config.userID)
        expect(response.status).toBe(200)
        expect(response.body).toEqual({})
    })

//Успешное создание книги 

it.only('12313213', async () => {
    const response = await books.createBook()
    console.log(response.body)
    expect(response.status).toBe(200)
    expect(response.body.token).toBeDefined()
    expect(response.body.expires).toBeDefined()
    expect(response.body.status).toBe('Success')
    expect(response.body.result).toBe('User authorized successfully.')
})


})
