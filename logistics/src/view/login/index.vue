<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 左侧动画 -->
      <div class="login-left"></div>

      <!-- 右侧表单 -->
      <div class="login-right">
        <h2 class="title">智慧物流管理系统</h2>
        <div class="form-container">
          <el-form size="large">
            <el-form-item>
              <el-input placeholder="请输入用户名">
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input type="password" placeholder="请输入密码">
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <div class="button-group">
              <el-button type="primary" class="submit-button"> 登录 </el-button>
              <el-button class="submit-button"> 注册 </el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { User, Lock } from "@element-plus/icons-vue"
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1976d2 0%, #64b5f6 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .login-box {
    width: 80%;
    height: 80vh;
    max-width: 1200px;
    min-height: 600px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
  }

  .login-left {
    flex: 1;
    background: #f8f9fa;
    position: relative;
    overflow: hidden;

    .canvas-animation {
      width: 100%;
      height: 100%;
    }
  }

  .login-right {
    flex: 0.8;
    padding: 8% 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      text-align: center;
      color: #1976d2;
      margin-bottom: 60px;
      font-size: 32px;
      font-weight: 600;
    }

    .form-container {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      padding: 0 20px;

      :deep(.el-form) {
        .el-form-item {
          margin-bottom: 30px;

          .el-input {
            --el-input-height: 50px;

            .el-input__wrapper {
              padding: 0 0 0 15px;
              background-color: #f5f7fa;
              box-shadow: none !important;
              border: 1px solid transparent;
              transition: all 0.3s;

              &:hover {
                border-color: #25588b;
                background-color: #fff;
              }

              &.is-focus {
                border-color: #1976d2;
                background-color: #fff;
              }
            }

            .el-input__inner {
              height: 50px;
              font-size: 16px;
              color: #606266;

              &::placeholder {
                color: #909399;
              }
            }

            .el-input__prefix {
              font-size: 18px;
              color: #909399;
              margin-right: 5px;
            }
          }
        }
      }

      .button-group {
        display: flex;
        gap: 20px;
        margin-top: 40px;

        .submit-button {
          flex: 1;
          height: 50px;
          font-size: 18px;
          border-radius: 8px;
          font-weight: 500;

          &:first-child {
            background-color: #1976d2;
            border-color: #1976d2;

            &:hover {
              background-color: #1565c0;
              border-color: #1565c0;
            }
          }

          &:last-child {
            color: #1976d2;
            border-color: #1976d2;

            &:hover {
              background-color: #f0f7ff;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .login-container {
    .login-box {
      width: 90%;
      height: 85vh;
    }
  }
}

@media screen and (max-width: 768px) {
  .login-container {
    .login-box {
      width: 95%;
      flex-direction: column;
      height: auto;
      min-height: auto;
      margin: 20px;
    }

    .login-left {
      display: none;
    }

    .login-right {
      flex: 1;
      padding: 40px 20px;
    }
  }
}
</style>
