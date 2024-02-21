<template>
  <div>
    <div class="progress-container">
      <div class="progress-bar">
        <span class="progress-text">75%</span>
      </div>
    </div>
  </div>
</template>

<style>
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.progress-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 50px auto;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;
}

.progress-text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-image: radial-gradient(circle at 20% 20%, #fff, transparent 6%),
    radial-gradient(circle at 50% 50%, #fff, transparent 6%),
    radial-gradient(circle at 80% 80%, #fff, transparent 6%);
  background-repeat: no-repeat;
  background-size: 50px 50px;
  animation: ripple 2s linear infinite;
}

@keyframes ripple {
  from {
    transform: scale(0.8);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>