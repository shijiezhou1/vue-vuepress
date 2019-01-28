<template>
    <ul class="list-group">
      <transition-group name="fade">
        <li
          class="list-group-item"
          v-for="(number,index) in numbers"
          @click="removeItem(index)"
          style="cursor:pointer"
          :key="number"
        >{{number}}</li>
      </transition-group>
    </ul>
</template>
