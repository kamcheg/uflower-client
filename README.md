# Админка проекта цветочного магазина.
node - v20.18.3

# Стандартизация проекта

## DTO
| Операция         | Request DTO (тело запроса)      | Response DTO (ответ)            |
|------------------|---------------------------------|----------------------------------|
| **GET all**      | —                               | `ColorListResponseDto` или `List<ColorResponseDto>` |
| **GET one**      | —                 | `ColorResponseDto`              |
| **POST (create)**| `CreateColorRequestDto`         | `ColorResponseDto`              |
| **PUT/PATCH**    | `UpdateColorRequestDto`         | `ColorResponseDto`              |

## Adapters
- transformServerProductToClient - getOne, getAll
- transformClientProductToServer - create, update

## Api naming
- getAll - fetchAllProducts
- getOne - fetchOneProduct
- create - createProduct
- update - updateProduct
- delete - deleteProduct

## Folder structure
TODO
