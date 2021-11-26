import styled from "@emotion/styled";

export default styled.div`
  margin: auto;
  width: 40%;
  padding: 20px;
  #publication-form {
    background-color: rgb(210, 210, 210);
    border-radius: 10px;
    padding: 10px;
    textarea {
      width: 100%;
      resize: none;
      height: 150px;
      border-width: 0;
      padding: 10px;
      border-radius: 10px;
    }
    div {
      display: flex;
      button {
        border-radius: 10px;
      }
    }
  }
  #publications {
    padding: 0;
    margin: 20px 0 20px 0;
    .publication {
      list-style: none;
      background-color: rgb(220, 220, 220);
      margin: 15px 0 15px 0;
      padding: 15px;
      border-radius: 10px;
      .publication-body {
        margin: 10px 0 10px 0;
        text-align: justify;
      }
      .publication-footer {
        display: flex;
        justify-content: flex-end;
        button {
          font-size: 12px;
          padding: 5px 10px 5px 10px;
        }
      }
    }
  }
`;
