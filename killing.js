let names = ["김현호", "김도윤", "김도현", "천예강", "이민수", "신민회", "누군가"]
let input = prompt("이름?", "이곳에 입력")

console.log(`입력 : ${input}, 자료형 : ${typeof(input)}`)

if (input !== null){
  names.splice(names.length-1, 0, input)

  for (name of names){
    if (name !== input){
      alert(`${name}......`)
    }else{
      alert(`${name}...???`)
      alert(`죽어라 ${name}!!`)
      break
    }
  }
}