<template>
<div>
<h2>测试vue组件文件</h2>
<div class="tips">{{tips}}</div>

</div>
</template>

<script>
export default {
    data(){
        return {
            tips:"我在学vue.."
        }
    }
}
</script>

<style scoped>
.tips{color:red}
</style>