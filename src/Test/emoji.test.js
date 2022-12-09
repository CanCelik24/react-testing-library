import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";
import Header from "../Header";

describe("Emoji Testleri", () => {

    test("Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodu", () => {
        render(<Header/>);
    
        const headerRender = screen.getByText(/Emoji Search/i);
        expect(headerRender).toBeInTheDocument();
    });

    test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodu", () => {
        render(<App />);
        const items = screen.getAllByText(/Click to copy emoji/i);
        const item = screen.getByText("Relaxed");
        expect(item).toBeInTheDocument();
        expect(items.length).toEqual(20);
      });

      test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodu", () => {
        render(<App />);
        const inputText = screen.getByText("100");
        expect(inputText).toBeInTheDocument("100");
      });

      test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodu", () => {
        render(<App/>);
        const clicks = screen.getAllByTestId("row");
        expect(clicks[0]).toHaveAttribute('data-clipboard-text');
    });

})