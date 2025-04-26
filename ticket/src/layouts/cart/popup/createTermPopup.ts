import Popup from "@rsrc/utils/popup/Popup";

import "./term-popup.scss";

const termContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;

termContent.innerHTML = `
  <h2 class="term-popup__title">Điều khoản mua vé Z Concert 2024</h2>
  <div class="term-popup__content">
    <div>
      <h5>1. Cơ sở thoả thuận:</h5>
      <ul>
        <li>
          <p>Hệ thống đặt vé trực tuyến <a href="/">zconcert.vn</a> thuộc Z concert. Khi thực hiện đặt vé tại hệ thống của chúng tôi có nghĩa bạn đã <strong>đồng ý với các điều kiện và các thông báo </strong> bao gồm, nhưng không giới hạn bởi những điều kiện sử dụng của website. Nếu bạn không có ý định mua và không đồng ý với bất kì điều nào của điều kiện sử dụng hoặc các điều khoản và điều kiện áp dụng khác, vui lòng <strong>KHÔNG SỬ DỤNG</strong> hệ thống đặt vé của chúng tôi.</p>
        </li>
        <li>
          <p>Các thông tin trong hệ thống đặt vé có thể <strong>thay đổi bất cứ lúc nào</strong> mà không cần thông báo trước. Bạn vui lòng truy cập vào các trang web của chúng tôi để xem lại Điều khoản này. Z concert không khẳng định tính chính xác đầy đủ và hoàn thiện của hệ thống hay bất kỳ dữ liệu hay thông tin trong hệ thống đặt vé.</p>
        </li>
      </ul>
    </div>
    <div>
      <h5>2. Sử dụng hệ thống đặt vé:</h5>
      <ul>
        <li>
          <p>Hệ thống đặt vé <a href="/">zconcert.vn</a> có mục đích cung cấp thông tin về đêm nhạc và bán vé cho những người tham gia. Chúng tôi có quyền <strong>từ chối truy cập</strong> của bạn vào hệ thống khi nghi ngờ bạn lạm dụng hệ thống.</p>
        </li>
        <li>
          <p>Việc đặt vé của bạn chịu ảnh hưởng bởi các điều khoản và điều kiện khác. Sử dụng hệ thống của chúng tôi, bạn sẽ phải tuân thủ các điều khoản và điều kiện mua, bao gồm cả thanh toán toàn bộ số tiền khi đến hạn.</p>
        </li>
        <li>
          <p>Bạn có quyền sử dụng hệ thống đặt vé để mua vé.</p>
        </li>
      </ul>
    </div>
    <div>
      <h5>3. Quy tắc mua vé:</h5>
      <ul>
        <li>
          <p>Phương thức thanh toán bắt buộc phải là <strong>hình thức chuyển khoản</strong> qua STK hoặc mã QR có trong website. Sau khi thanh toán/nhận mã QR, khán giả bắt buộc nhấn xác nhận để thông tin vé hiện trên hệ thống. Khán giả vui lòng không mua vé từ bất kì một nguồn nào khác ngoại trừ trang web chính thức của dự án: <a href="/">zconcert.vn</a> tránh trường hợp vé có thể bị làm giả hoặc lừa đảo.</p>
        </li>
        <li>
          <p><strong>Không hoàn, trả hoặc đổi vé</strong> đã thanh toán dưới bất kỳ hình thức nào. Vé đã đặt bắt buộc phải được thanh toán trong vòng 24 giờ kể từ lúc đặt vé, nếu không vé sẽ bị HỦY. Sau khi bạn đặt vé và thanh toán trên hệ thống zconcert.vn, bạn sẽ được cấp vé điện tử thông qua mail.</p>
        </li>
        <li>
          <p>Vui lòng <strong>không chia sẻ, chuyển tiếp</strong> vé, hình ảnh vé cho bất cứ cá nhân nào để tránh ảnh hưởng đến quyền lợi tham gia đêm nhạc. BTC sẽ từ chối hỗ trợ đối với các trường hợp mất vé, không có vé và không check-in đối với trường hợp có nhiều hơn 1 người check-in cùng một mã vé. Khán giả có trách nhiệm tự bảo quản thông tin vé đã mua của mình.</p>
        </li>
        <li>
          <p>Mỗi vé chỉ dành riêng cho 01 cá nhân và đêm nhạc dành cho đối tượng khán giả <strong>trên 12 tuổi</strong>. Khán giả từ dưới 12 tuổi yêu cầu phải có người giám hộ đi kèm.</p>
        </li>
        <li>
          <p>BTC có thể hoãn chương trình, thay đổi lịch tổ chức do các vấn đề bất lợi về thời tiết, tình huống khẩn cấp hoặc nguy hiểm gây ảnh hưởng đến khán giả tham gia đêm nhạc.</p>
        </li>
      </ul>
    </div>
    <div>
      <h5>4. Bảo mật</h5>
      <p>Z concert sẽ có biện pháp hợp lý để đảm bảo rằng thông tin mà bạn lưu tại hệ thống đặt vé sẽ được giữ bí mật và bảo vệ khỏi những truy cập trái phép. Chúng tôi cam kết chỉ sử dụng cho mục đích và phạm vi đã nêu và không tiết lộ cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý của bạn.</p>
    </div>
  </div>

`;

const termPopup = new Popup.PopupBuilder(termContent)
    .closeOnClickOutside()
    .build();

termPopup.wrapper.classList.add("term-popup__wrapper");

export { termPopup };
