# Геймплей

В игре получается четыре концовки:

* Симулянт — тебе не верят
* Псих — тебе слишком сильно верят
* Безумие заразительно — ты сводишь с ума врачиху своим капитализмом
* Тревоги есть у всех — тебе верят

Эти концовки определяются сразу, как только ГГ заходит на прием к врачихе. Они основаны на событиях, предшествующих до приема. Объясняется это тем, что ГГ вдохновляется событиями, своей реакцией на них и использует это на приеме. Геймплейно, можно сказать, что игра представляет собой тест, итог которого подводится в сцене с врачихой.

## Характеристики концовок

Из концовок выводятся следующие характеристики:

* Симулянт — адекватность
* Псих — неадекватность
* Безумие заразительно — капитализм
* Тревоги есть у всех — тленность

Побеждает концовка, характеристика которой набирает как можно больше очков.

## Равное количество очков

Если какие-то характеристики набирают равное количество очков, то выбирается самая приоритетная концовка.

Например, игрок набрал:

| Концовка             | Характеристика | Очки |
|----------------------|----------------|------|
| Симулянт             | Адекватность   | 0    |
| Псих                 | Неадекватность | 2    |
| Безумие заразительно | Капитализм     | 2    |
| Тревоги есть у всех  | Тленность      | 1    |

Концовка «Псих» побеждает, потому что находится выше, чем «Безумие заразительно».

Еще пример:

| Концовка             | Характеристика | Очки |
|----------------------|----------------|------|
| Симулянт             | Адекватность   | 2    |
| Псих                 | Неадекватность | 2    |
| Безумие заразительно | Капитализм     | 2    |
| Тревоги есть у всех  | Тленность      | 1    |

«Симулянт» побеждает, потому что она приоритетнее, чем «Псих» и «Безумие заразительно».

### Алгоритм

* отсортировать по значению в порядке убывания
* взять первые одинаковые числа
* отсортировать по названию в порядке убывания
* вернуть первое число

```fsharp
module List =
  let getFirstDuplicates projection = function
    | x::xs ->
      let first = projection x
      let rest =
        xs
        |> List.takeWhile (fun x -> first = projection x)
      x::rest
    | [] -> failwithf "List is empty!"

type CharacteristicName =
  | Adequacy = 4
  | Inadequacy = 3
  | Capitalism = 2
  | Tlenost = 1

module CharacteristicName =
  let getOrder (name: CharacteristicName) = int name

type Characteristic = { name: CharacteristicName; value: int }

module Characteristic =
  let makeAdequacy value = { name = CharacteristicName.Adequacy; value = value }
  let makeInadequacy value = { name = CharacteristicName.Inadequacy; value = value }
  let makeCapitalism value = { name = CharacteristicName.Capitalism; value = value }
  let makeTlenost value = { name = CharacteristicName.Tlenost; value = value }

let getTopCharacteristic characteristics =
  characteristics
  |> List.sortByDescending (fun x -> x.value)
  |> List.getFirstDuplicates (fun x -> x.value)
  |> List.sortByDescending (fun x -> CharacteristicName.getOrder x.name)
  |> List.head

#r "nuget: Expecto, 10.2.1"
open Expecto

[<Tests>]
let getTopCharacteristicTest =
  testList "getTopCharacteristicTest" [
    testCase "1" <| fun () ->
      Expect.equal
        (getTopCharacteristic [
          Characteristic.makeAdequacy 1
          Characteristic.makeTlenost 4
          Characteristic.makeCapitalism 3
          Characteristic.makeInadequacy 2
        ])
        (Characteristic.makeTlenost 4)
        ""
    testCase "2" <| fun () ->
      Expect.equal
        (getTopCharacteristic [
          Characteristic.makeAdequacy 0
          Characteristic.makeInadequacy 2
          Characteristic.makeCapitalism 2
          Characteristic.makeTlenost 1
        ])
        (Characteristic.makeInadequacy 2)
        ""
    testCase "3" <| fun () ->
      Expect.equal
        (getTopCharacteristic [
          Characteristic.makeAdequacy 2
          Characteristic.makeInadequacy 2
          Characteristic.makeCapitalism 1
          Characteristic.makeTlenost 2
        ])
        (Characteristic.makeAdequacy 2)
        ""
  ]

let tests = testList "all" [
  getTopCharacteristicTest
]

runTestsWithCLIArgs [] [||] tests
```
