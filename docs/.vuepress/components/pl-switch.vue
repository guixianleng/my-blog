<template>
  <div class="box">
    <div class="pl-switch-box">
      <input
        :class="classObj"
        :id="ids"
        :checked="isChecked"
        :disabled="isDisabled"
        type="checkbox">
      <label :for="ids"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-switch',
  props: {
    oblate: {
      type: Boolean,
      default: false
    },
    onOff: {
      type: Boolean,
      default: false
    },
    rightWrong: {
      type: Boolean,
      default: false
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    groupOn: {
      type: Boolean,
      default: false
    },
    groupRw: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj () {
      return {
        'pl-switch': true,
        'pl-switch-box__inner': true,
        'pl-switch__oblate': this.oblate,
        'pl-switch__on-of': this.onOff,
        'pl-switch__right-wrong': this.rightWrong,
        'pl-switch-box__inner--on-of': this.groupOn,
        'pl-switch-box__inner--right-wrong': this.groupRw
      }
    }
  },
  data () {
    return {
      ids: 'm_10'
    }
  },
  mounted () {
    let rand = (function () {
      var today = new Date()
      var seed = today.getTime()
      function rnd () {
        seed = (seed * 9301 + 49297) % 233280
        return seed / 233280.0
      }
      return function (number) {
        return Math.ceil(rnd() * number)
      }
    })()
    // this.ids = 'm_' + rand(100)
    this.ids = Math.random().toString(36).substring(2)
  }
}
</script>

<style lang="less" scoped>
.box {
  margin: 20px 120px 20px 0;
  display: inline-block;
  vertical-align: middle;
}
.pl-switch {
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background-color: #ccc;
  border: none;
  outline: none;
  -webkit-appearance: none;
  transition: all .3s linear;
  position: relative;
  cursor: pointer;
  &:disabled + label {
    cursor: not-allowed;
  }
  &:disabled {
    background-color: #ccc;
    opacity: 0.5;
    cursor: not-allowed;
    &::after {
      background-color: #FFF;
      border: 1px solid #ccc;
      color: #ccc;
    }
  }
  &:disabled {
    input:checked {
      background-color: #1890ff;
      cursor: not-allowed;
      opacity: 0.5;
      &::after {
        background-color: #FFF;
        border: 1px solid #1890ff;
        color: #1890ff;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translate(100%, -50%);
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #ccc;
    transition: all .3s linear;
    border-radius: 50%;
  }
  &:checked {
    background-color: #1890ff;
    &::after {
      right: 0%;
      transform: translate(0, -50%);
      border: 1px solid #1890ff;
    }
  }
  &__oblate {
    height: 10px;
    &::after {
      width: 20px;
      height: 20px;
    }
  }
  &__on-of {
    &::after {
      content: "OFF";
      color: #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:checked {
      &::after {
        content: "ON";
        color: #1890ff;
      }
    }
  }
  &__right-wrong {
    &::after {
      content: "\2716";
      display: flex;
      color: #ccc;
      align-items: center;
      justify-content: center;
    }
    &:checked {
      &::after {
        content: "\2714";
        color: #1890ff;
      }
    }
  }
  &-box {
    width: 60px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    label {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      &::after {
        position: absolute;
        top: 50%;
        right: 20%;
        color: #fff;
        transform: translate(20%, -50%);
      }
    }
    &__inner--on-of + label::after {
      content: "OFF";
    }
    &__inner--on-of:checked + label::after {
      content: "ON";
    }
    &__inner--on-of:checked + label::after,
    &__inner--right-wrong:checked + label::after {
      top: 50%;
      right: 80%;
      transform: translate(80%, -50%);
    }
    &__inner--right-wrong + label::after {
      content: "\2716";
    }
    &__inner--right-wrong:checked + label::after {
      content: "\2714";
    }
  }
}
</style>
