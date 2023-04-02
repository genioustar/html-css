class User {
  // 생성자 안에서 접근 제한자 키워드가 있다면 파라미터로 넘기는 동시에 할당(this.id = id)해준다.
  constructor(public id?: string) {}

  // 선언
  setId(id: string): void;
  setId(id: number): void;

  // 구현
  setId(id: string | number): void {
    // 구현 내용
    this.id = typeof id === "number" ? id.toString() : id;
  }
}

const elice = new User();

elice.setId(12345);
console.log(elice.id, typeof elice.id);

elice.setId("123");
console.log(elice.id, typeof elice.id);
