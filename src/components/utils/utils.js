export function validateValue(value, list){
	if(!list instanceof Array){
		return false
	}
	if(~list.indexOf(value)){
		return true
	} else {
		return false
	}
}