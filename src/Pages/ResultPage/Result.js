import React, { useState } from 'react'
import Card from '../../UI/Card'
import './Result.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Result() {
    const location = useLocation();
    const score = location.state.score;
    const [ nickname, setNickname] = useState('');
    const [resultData, setResultData] = useState(null); // resultData 상태 추가
    const navigate = useNavigate();

    const onNicknameHandler = (e) => {
        setNickname(e.currentTarget.value);
        
    }

    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        

        if (!nickname) {
            alert('닉네임을 입력해주세요.');
            return; // 닉네임이 없으면 여기서 중단
        }
        const userData = {
            username: nickname,
            score: score
        };

        

        try {
            const response = await axios.post('http://localhost:8080/user/result', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                const resultData = response.data;
                // resultData 상태 업데이트
                setResultData(resultData); 

                // 결과 데이터를 localStorage에 저장
                localStorage.setItem('resultData', JSON.stringify(resultData));

                // Rank 페이지로 이동
                navigate('/rank');
                
            } else {
                console.error('Failed to insert data');
                // 실패 처리 로직 추가
            }
        } catch (error) {
            console.error('Error:', error);
            // 오류 처리 로직 추가
        }
    }
    
    
    return (
        <div>
            <Card>
                <div className='result-card-header'>
                    <h2>결 과</h2>
                    
                </div>
                <div className='result-card-body'>
                    <span>당신의 점수: {score} / 100</span>
                    <form onSubmit={onSubmitHandler} >
                        <input
                        type='text'
                        placeholder='닉네임'
                        value={nickname}
                        onChange={onNicknameHandler}
                        >
                        </input>
                        <button type='submit'>제출하기</button>
                    </form>
                   
                    <Link to="/rank"><p>순위 보러가기</p></Link>
                    <Link to="/solution"><p>해설 보기</p></Link>
                </div>
            </Card>
        </div>
    )
}

export default Result
