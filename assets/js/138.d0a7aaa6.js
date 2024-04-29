(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{466:function(n,s,a){"use strict";a.r(s);var e=a(8),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("#dasd")]),n._v(" "),s("div",{staticClass:"language-c++ line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('#include<Windows.h>\n#include <glad/glad.h>\n#include <iostream>\n#include <GLFW/glfw3.h>\n\ntypedef HGLRC (WINAPI * PFNWGLCREATECONTEXT)(HDC);\nPFNWGLCREATECONTEXT wglCreateContextPtr;\n\ntypedef BOOL (WINAPI * PFNWGLMAKECURRENT)(HDC, HGLRC);\nPFNWGLMAKECURRENT wglMakeCurrentPtr;\n\n///显示在屏幕上\n\nint main(){\n    HMODULE hOpenGL = LoadLibrary("OpenGL32.dll");\n    wglCreateContextPtr = (PFNWGLCREATECONTEXT)GetProcAddress(hOpenGL, "wglCreateContext");\n    wglMakeCurrentPtr = (PFNWGLMAKECURRENT)GetProcAddress(hOpenGL, "wglMakeCurrent");\n    // 像素表格描述器\n    PIXELFORMATDESCRIPTOR pfd;\n    pfd.nSize=40;\n    pfd.nVersion=1;\n    //\n    pfd.dwFlags=PFD_DRAW_TO_WINDOW | PFD_SUPPORT_OPENGL | PFD_SUPPORT_GDI;\n    pfd.iPixelType=PFD_TYPE_RGBA;\n    pfd.cColorBits=0;\n    //\n    pfd.cRedBits=0;\n    pfd.cRedShift=0;\n    pfd.cGreenBits=0;\n    pfd.cGreenShift=0;\n    pfd.cBlueBits=0;\n    pfd.cBlueShift=0;\n    pfd.cAlphaBits=0;\n    pfd.cAlphaShift=0;\n    //\n    pfd.cAccumBits=0;\n    pfd.cAccumRedBits=0;\n    pfd.cAccumBlueBits=0;\n    pfd.cAccumGreenBits=0;\n    pfd.cAccumAlphaBits=0;\n    //\n    pfd.cDepthBits=0;\n    pfd.cStencilBits=0;\n    pfd.cAuxBuffers=0;\n    pfd.iLayerType=PFD_MAIN_PLANE;\n    pfd.bReserved=0;\n    pfd.dwLayerMask=0;\n    pfd.dwVisibleMask=0;\n    pfd.dwDamageMask=0;\n\n    // glfwInit();\n    // glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);\n    // GLFWwindow* window = glfwCreateWindow(640, 480, "OpenGL", NULL, NULL);\n    // glfwMakeContextCurrent(window);\n    // 获取设备屏幕\n    HDC hdc=GetDC(NULL);\n    int pixelFormat=ChoosePixelFormat(hdc,&pfd);\n    SetPixelFormat(hdc,pixelFormat,&pfd);\n    HGLRC hglrc=wglCreateContextPtr(hdc);\n    wglMakeCurrentPtr(hdc,hglrc);\n\n    // 绘制\n    if (!gladLoadGL()) {\n        std::cout << "GLAD failed to load" << std::endl;\n        return -1;\n    }\n    int i=1;\n    while (i<100){\n        ++i;\n        glViewport(0,0,800,800);\n        glColor3f(1.0f,0.0f,0.0f);\n        glBegin(GL_TRIANGLES);\n        glVertex2f(-0.5f,-0.5f);\n        glVertex2f(0.0f,0.5f);\n        glVertex2f(0.5f,-0.5);\n        glEnd();\n        glFlush();\n    }\n    std::cout<<"normal end"<<std::endl;\n    // glfwTerminate();\n    return 0;\n    \n}\n\n\n\n//     glad\n//     int i =0;\n//     while(i<1000){\n//         ++i;\n//         glDrawArrays( GL_LINES, 0, 2 );\n//     }\n//     return 0;\n// }\n\n\n// #include <glad/glad.h>\n// #include <Windows.h>\n// #include <iostream>\n\n// int main(){\n    \n//     if (!gladLoadGL()) {\n//         std::cout << "GLAD failed to load" << std::endl;\n//         return -1;\n//     }\n\n//     // 绘制三角形\n//     float vertices[] = {\n//         -0.5f, -0.5f, 0.0f,\n//         0.5f, -0.5f, 0.0f,\n//         0.0f,  0.5f, 0.0f\n//     };\n\n//     unsigned int VBO, VAO;\n//     glGenVertexArrays(1, &VAO);\n//     glGenBuffers(1, &VBO);\n\n//     glBindVertexArray(VAO);\n//     glBindBuffer(GL_ARRAY_BUFFER, VBO);\n//     glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);\n//     glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);\n//     glEnableVertexAttribArray(0);\n\n//     glDrawArrays(GL_TRIANGLES, 0, 3);\n\n//     glBindBuffer(GL_ARRAY_BUFFER, 0);\n//     glBindVertexArray(0);\n\n//     glDeleteVertexArrays(1, &VAO);\n//     glDeleteBuffers(1, &VBO);\n\n//     // 在屏幕上绘制\n//     glFinish();\n//     HDC hdc = GetDC(NULL);\n//     glReadBuffer(GL_FRONT);\n//     glDrawBuffer(GL_BACK);\n//     glBlitFramebuffer(0, 0, 640, 480, 0, 0, 640, 480, GL_COLOR_BUFFER_BIT, GL_NEAREST);\n//     SwapBuffers(hdc);\n//     ReleaseDC(NULL, hdc);\n//     std::cout << "finish" << std::endl;\n//     return 0;\n// }\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br"),s("span",{staticClass:"line-number"},[n._v("114")]),s("br"),s("span",{staticClass:"line-number"},[n._v("115")]),s("br"),s("span",{staticClass:"line-number"},[n._v("116")]),s("br"),s("span",{staticClass:"line-number"},[n._v("117")]),s("br"),s("span",{staticClass:"line-number"},[n._v("118")]),s("br"),s("span",{staticClass:"line-number"},[n._v("119")]),s("br"),s("span",{staticClass:"line-number"},[n._v("120")]),s("br"),s("span",{staticClass:"line-number"},[n._v("121")]),s("br"),s("span",{staticClass:"line-number"},[n._v("122")]),s("br"),s("span",{staticClass:"line-number"},[n._v("123")]),s("br"),s("span",{staticClass:"line-number"},[n._v("124")]),s("br"),s("span",{staticClass:"line-number"},[n._v("125")]),s("br"),s("span",{staticClass:"line-number"},[n._v("126")]),s("br"),s("span",{staticClass:"line-number"},[n._v("127")]),s("br"),s("span",{staticClass:"line-number"},[n._v("128")]),s("br"),s("span",{staticClass:"line-number"},[n._v("129")]),s("br"),s("span",{staticClass:"line-number"},[n._v("130")]),s("br"),s("span",{staticClass:"line-number"},[n._v("131")]),s("br"),s("span",{staticClass:"line-number"},[n._v("132")]),s("br"),s("span",{staticClass:"line-number"},[n._v("133")]),s("br"),s("span",{staticClass:"line-number"},[n._v("134")]),s("br"),s("span",{staticClass:"line-number"},[n._v("135")]),s("br"),s("span",{staticClass:"line-number"},[n._v("136")]),s("br"),s("span",{staticClass:"line-number"},[n._v("137")]),s("br"),s("span",{staticClass:"line-number"},[n._v("138")]),s("br"),s("span",{staticClass:"line-number"},[n._v("139")]),s("br"),s("span",{staticClass:"line-number"},[n._v("140")]),s("br"),s("span",{staticClass:"line-number"},[n._v("141")]),s("br"),s("span",{staticClass:"line-number"},[n._v("142")]),s("br"),s("span",{staticClass:"line-number"},[n._v("143")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);