import LargeHead from "../(components)/head/LargeHead"

const PrivacySettingPage = () => {
    return (
        <div className="max-w-[1152px]">
            <div className="mb-[94px]">
                <LargeHead content="개인정보 설정" />
            </div>
            <div className="bg-white p-8">
                <div className="flex flex-row items-center mb-6 gap-6">
                    <div className="w-[85px] h-[85px] rounded-full bg-neutral-10 p-[5px]" />
                    <div className="flex flex-col">
                        <button className="text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            프로필 업로드
                        </button>
                        <p className="text-xs text-gray-500 mt-1">100MB이내의 이미지 파일을 업로드해주세요.</p>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="username">
                        사용자 이름
                    </label>
                    <input
                        className="w-full p-2 border-2 border-gray-300 rounded-md"
                        id="username"
                        placeholder="8글자 이내의 사용자이름을 작성해주세요."
                        type="text"
                    />
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="username">
                    이메일
                </label>
                <div className="flex gap-2 mb-6">
                    <input className="flex-grow p-2 border-2 border-gray-300 rounded-md" placeholder="user" type="text" />
                    <span className="flex items-center px-3 text-sm">@</span>
                    <input
                        className="flex-grow p-2 border-2 border-gray-300 rounded-md"
                        defaultValue="sniperfactory.com"
                        type="text"
                    />
                    <select className="flex-shrink p-2 border-2 border-gray-300 rounded-md">
                        <option value="">직접입력</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                    </select>
                    <button className="flex-shrink bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        인증하기
                    </button>
                </div>
                <button className="w-full mb-6 text-neutral-0 bg-primary-100 text-white font-bold py-2 px-4 rounded border-2">저장하기</button>
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mt-10 mb-4">로그인 관리</h3>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="newPassword">
                        아이디
                    </label>
                    <input
                        className="w-full p-2 border-2 border-gray-300 rounded-md"
                        id="newPassword"
                        placeholder="user"
                        type="password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="confirmPassword">
                        비밀번호
                    </label>
                    <input
                        className="w-full p-2 border-2 border-gray-300 rounded-md"
                        id="confirmPassword"
                        placeholder="******"
                        type="password"
                    />
                </div>
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mt-10 mb-4">알림 설정</h3>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <div className="text-m font-bold font-medium text-gray-900">채용제안하기 알림</div>
                            <div className="text-sm font-medium text-neutral-50">‘채용제안하기’의 알림을 설정할 수 있습니다.</div>
                        </div>
                        <input className="form-checkbox h-5 w-5 text-gray-600" id="marketingConsent" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-m font-bold font-medium text-gray-900">직무 채팅방 알림</div>
                            <div className="text-sm font-medium text-neutral-50">‘직무별 채팅방’의 알림을 설정할 수 있습니다.</div>
                        </div>
                        <input className="form-checkbox h-5 w-5 text-gray-600" id="serviceInfoConsent" type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacySettingPage