import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Analisis Sentimen")

components.html(
    """
    <!DOCTYPE html>
    <html>
    <body>
        <h2>Web Analisis Sentimen</h2>
        <textarea id="inputText"></textarea>
        <button onclick="analisis()">Analisis</button>
        <p id="hasil"></p>

        <script>
        function analisis(){
            let text = document.getElementById("inputText").value;
            document.getElementById("hasil").innerHTML =
                text.includes("bagus") ? "POSITIF" : "NEGATIF";
        }
        </script>
    </body>
    </html>
    """,
    height=350,
)
