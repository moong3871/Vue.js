<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="/">홈</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">홈</b-nav-item>
          <b-nav-item href="/about">사이트 소개</b-nav-item>
          <b-nav-item href="/category">카테고리</b-nav-item>
          <b-nav-item href="/market">장터</b-nav-item>
          <b-nav-item href="/mylibrary">내 서재</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-item href="#">채팅</b-nav-item>
          <b-nav-item href="/logout">로그아웃</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
