import { ConfigProvider } from "antd"
import MainLayout from "./components/layout/MainLayout"

function App() {

  return (
    <div className="">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#009A54",
          },
          components: {
            Input: {
              borderRadius: 5,
            }
          }
        }}
      >
        <MainLayout />
      </ConfigProvider>
    </div>
  )
}

export default App
