# Psychotlenij (Психотленный)

Текстовая игра про Нетленного, который отправился в психдиспансер, чтобы добыть себе немного...

## Build

* Установить [tweego](https://www.motoslave.net/tweego/)

* Собрать исходник:

  ```bash
  tweego -o Psychotlenij.html src/game.twee
  ```

## Development

* Запустить `tweego` в watch режиме:
  ```bash
  tweego -w -o index.html src/game.twee
  ```
* (опционально) установить [vite](https://vite.dev/):

  ```bash
  npm install -g vite
  ```

* запустить Vite:

  ```bash
  vite
  ```

Либо через VSCode:

* `F1` или `Ctrl` + `Shift` + `P`
* "Tasks: Run Task"
* "dev"

Он запустит одновременно две задачи.
