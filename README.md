# Vue.js

[1. 뷰 인스턴스 생성하기](#뷰-인스턴스-생성하기)

[2. data와 method](#data와-method)

[3. Data Binding](#Data-Binding)

# 뷰 인스턴스 생성하기

> 생성 방법: 직접 script에 추가 / CLI

1. 직접 `<script>`에 추가

   ```html
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   ```

2. body 내부에 vue 인스턴스

   ```html
     <div id="app">
       {{ name }}
     </div>
     <script>
       new Vue({
         el: '#app',
         data: {
           name: '뷰인스턴스'
         }
       })
     </script>
   ```

# data와 method

1. data

   ```html
     <div id="app">
   	{{ person.name }} {{ person.age }}
     </div>
     <script>
       new Vue({
         el: '#app',
         data: {
           person: {
             name: '뷰인스턴스',
             age: 27
           }
         }
       })
   ```

2. method

   ```html
     <div id="app">
       {{ nextYear('안녕하세요') }} //이렇게 함수로() 써줘야 한다.
     </div>
     <script>
       new Vue({
         el: '#app',
         data: {
           person: {
             name: '뷰인스턴스',
             age: 27
           }
         },
         methods: {
           nextYear: function(greeting) {
             return greeting + this.person.name + '는 내년에 ' + (this.person.age + 1) + '살 입니다.'
           }
         }
       })
   ```

   - html 태그 내에서, 함수 사용 시 함수(`인자`)
   - methods 내에서, 함수 정의 시, 함수(`매개변수`)

   - 함수 정의는 축약 가능

     ```html
     methods: {
     	nextYear(greeting) {}
     }
     ```

# Data Binding

> data 혹은 methods와 연결할 때

```html
  <div id="app">
    <input type="text" v-bind:value="inputData">
  </div>
  <script>
    new Vue({
      el: '#app',
      data: {
        person: {
          name: '뷰인스턴스',
          age: 27
        },
        inputData: 'hello',
      },
      methods: {
        nextYear: function() {
          return this.person.name + '는 내년에 ' + (this.person.age + 1) + '살 입니다.'
        }
      }
    })
  </script>
```

- 축약 가능

  ```html
  v-bind:value="inputData"
  :value="inputData"
  ```

- methods도 binding 가능

  ```html
    <div id="app">
      <a :href="getLink(link)">뉴스</a>
    </div>
    <script>
      new Vue({
        el: '#app',
          link: 'naver.com'
        },
        methods: {
          getLink(url) {
            return 'https://news.' + url
          }
        }
      })
    </script>
  ```

  